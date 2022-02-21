/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

function Tag(props) {
  const { permalink, name, count, selected } = props;
  return (
    <>
      {
        count > 0 ?
          <Link
            style={{backgroundColor:"#E5E7EB"}}
            href={permalink}
            className={`text-xs font-semibold px-2 py-1 inline-flex items-center  ${selected === name ? "bg-primary hover:text-secondary" : "bg-gray-100 text-secondary"}`}>
            {name}
            {count && <span className="ml-1">({count})</span>}
            {
              selected === name ?
                <Link to="/tutorials">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4 hover:text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
                : null
            }
          </Link>
          :
          <Link
            style={{backgroundColor:"#E5E7EB"}}
            href={permalink}
            className={`text-xs font-semibold  px-2 py-1 inline-flex items-center bg-gray-100 text-secondary hover:text-primary`}>
            {name}
          </Link>
      }
    </>
  );
}

export default Tag;
