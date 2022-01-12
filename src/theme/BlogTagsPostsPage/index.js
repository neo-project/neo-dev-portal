/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import Translate, { translate } from '@docusaurus/Translate';
import { ThemeClassNames, usePluralForm } from '@docusaurus/theme-common'; // Very simple pluralization: probably good enough for now
import Tag from '@theme/Tag';
import styles from '../TagsListInline/styles.module.css';
import useGlobalData from '@docusaurus/useGlobalData';


function useBlogPostsPlural() {
  const { selectMessage } = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.blog.post.plurals',
          description:
            'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One post|{count} posts',
        },
        {
          count,
        },
      ),
    );
}

export default function BlogTagsPostsPage(props) {
  const { metadata, items, sidebar } = props;
  const { allTagsPath, name: tagName, count } = metadata;
  const blogPostsPlural = useBlogPostsPlural();

  const title = translate(
    {
      id: 'theme.blog.tagTitle',
      description: 'The title of the page for a blog tag',
      message: '{nPosts} tagged with "{tagName}"',
    },
    {
      nPosts: blogPostsPlural(count),
      tagName,
    },
  );
  //custom
  const globalData = useGlobalData();
  const pluginData = globalData['custom-blog-plugin-tags']["default"];
  const allTags = pluginData.blogTags;

  return (
    <BlogLayout
      title={title}
      wrapperClassName={ThemeClassNames.wrapper.blogPages}
      pageClassName={ThemeClassNames.page.blogTagPostListPage}
      searchMetadatas={{
        // assign unique search tag to exclude this page from search results!
        tag: 'blog_tags_posts',
      }}
      sidebar={sidebar}>
      <p className="mb-6 text-2xl font-semibold">Community Tutorials</p>

      <ul className="mb-12">
        {
          Object.keys(allTags).map((key) => (
            <li key={key} className={styles.tag}>
              <Tag name={allTags[key].name} count={allTags[key].items.length} permalink={allTags[key].permalink} selected={tagName} />
            </li>
          ))
        }
      </ul>

      {/* <header className="margin-bottom--xl">
        <h1>{title}</h1>
        <Link href={allTagsPath}>
          <Translate
            id="theme.tags.tagsPageLink"
            description="The label of the link targeting the tag list page">
            View All Tags
          </Translate>
        </Link>
      </header> */}

      {items.map(({ content: BlogPostContent }) => (
        <BlogPostItem
          key={BlogPostContent.metadata.permalink}
          frontMatter={BlogPostContent.frontMatter}
          assets={BlogPostContent.assets}
          metadata={BlogPostContent.metadata}
          truncated={BlogPostContent.metadata.truncated}>
          <p>{BlogPostContent.metadata.description}</p>
        </BlogPostItem>
      ))}
    </BlogLayout>
  );
}
