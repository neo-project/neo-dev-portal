/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Tag from '@theme/Tag';
import styles from './styles.module.css';
export default function TagsListInline({tags}) {
  return (
    <>
      {/* <b>
        <Translate
          id="theme.tags.tagsListLabel"
          description="The label alongside a tag list">
          Tags:
        </Translate>
      </b> */}
      <div className="font-medium text-sm flex flex-wrap gap-4">
        {tags.map(({label, permalink: tagPermalink}) => (
            <Tag name={label} permalink={tagPermalink} />
        ))}
      </div>
    </>
  );
}
