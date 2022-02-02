/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { MDXProvider } from '@mdx-js/react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { usePluralForm } from '@docusaurus/theme-common';
import MDXComponents from '@theme/MDXComponents';
import EditThisPage from '@theme/EditThisPage';
import styles from './styles.module.css';
import TagsListInline from '@theme/TagsListInline';
import BlogPostAuthors from '@theme/BlogPostAuthors'; // Very simple pluralization: probably good enough for now

function useReadingTimePlural() {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {
          readingTime,
        },
      ),
    );
  };
}

function BlogPostItem(props) {
  const readingTimePlural = useReadingTimePlural();
  const { withBaseUrl } = useBaseUrlUtils();
  const {
    children,
    frontMatter,
    assets,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const {
    date,
    formattedDate,
    permalink,
    tags,
    readingTime,
    title,
    editUrl,
    authors,
  } = metadata;
  // const image = assets.image ?? frontMatter.image;

  const skill = frontMatter.skill ?? ""

  const sourceLink = frontMatter.source ?? ""

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? 'h1' : 'h3';
    return (
      <header>
        <TitleHeading className="text-secondary font-bold" itemProp="headline">
          {isBlogPostPage ? (
            title
          ) : (
            <>
              <div className="lg:hidden inline-block mb-6">
                <p className="uppercase font-semibold text-xs border px-3 py-1 border-secondary text-secondary">BEGINNER</p>
              </div>

              <div className="flex items-center">
                <Link itemProp="url" to={permalink}>
                  {title}
                </Link>
                <div className="ml-auto pl-4 hidden lg:block">
                  <p className="uppercase font-semibold text-xs border px-3 py-1 border-secondary text-secondary">{skill}</p>
                </div>
              </div>
            </>
          )}
        </TitleHeading>
        <div className="pt-2 pb-4 text-gray-400 text-sm">
          {authors[0].name}&nbsp;·&nbsp;
          <time dateTime={date} itemProp="datePublished">
            {formattedDate}
          </time>

          {typeof readingTime !== 'undefined' && (
            <>
              {' · '}
              {readingTimePlural(readingTime)}

              {
                sourceLink ?
                  <>
                    &nbsp;·&nbsp;
                    <a className="text-primary" href={sourceLink} target="_blank">
                      Source
                    </a>
                  </>
                  : null
              }

            </>
          )}
        </div>
        {isBlogPostPage ?
          (
            <div className="mb-6">
              <TagsListInline tags={tags} />
            </div>
          )
          : null
        }
        {/* <BlogPostAuthors authors={authors} assets={assets} /> */}
      </header>
    );
  };

  return (
    <article
      className={!isBlogPostPage ? ' border flex items-center flex-col lg:flex-row mb-8 ' : ""}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting">
      {
        (isBlogPostPage === false && frontMatter.image) ?
          <div className="flex-none flex items-center justify-center w-full lg:w-60 h-60 p-4">
            <img src={`${assets.image}`} className="w-full h-full object-cover" />
          </div>
          :
          null
      }

      {
        (isBlogPostPage === false && !frontMatter.image) ?
          <div className="flex-none  items-center justify-center w-full lg:w-60 h-60 hidden lg:flex">
            <svg className width="50" height="55" viewBox="0 0 50 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 9.625V46.4292L24.0553 55V17.875L50 8.3875L26.4516 0L0 9.625V9.625Z" fill="#00E599" />
              <path d="M26 19.032V39.2956L50 48V10L26 19.032V19.032Z" fill="#00AF92" />
            </svg>
          </div>

          : null
      }

      <div className={` ${isBlogPostPage ? "" : "px-6 py-6 border-l"}`}>
        {renderPostHeader()}

        <div className={`markdown ${isBlogPostPage ? "" : "line-clamp-3"}`} itemProp="articleBody">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </div>

        {(tags.length > 0 || truncated) && (
          <footer
            className={clsx('row mt-6', {
              [styles.blogPostDetailsFull]: isBlogPostPage,
            })}>
            {tags.length > 0 && (
              <div
                className={clsx('col', {
                  'col--9': !isBlogPostPage,
                })}>
                <TagsListInline tags={tags} />
              </div>
            )}

            {isBlogPostPage && editUrl && (
              <div className="col margin-top--sm">
                <EditThisPage editUrl={editUrl} />
              </div>
            )}

            {!isBlogPostPage && truncated && (
              <div className="col col--3 text--right">
                <Link
                  to={metadata.permalink}
                  aria-label={`Read more about ${title}`}>
                  <b>
                    <Translate
                      id="theme.blog.post.readMore"
                      description="The label used in blog post item excerpts to link to full blog posts">
                      Read More
                    </Translate>
                  </b>
                </Link>
              </div>
            )}
          </footer>
        )}

      </div>

    </article>
  );
}

export default BlogPostItem;
