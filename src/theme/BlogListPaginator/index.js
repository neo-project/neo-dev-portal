/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';

function BlogListPaginator(props) {
  const { metadata } = props;
  // const {previousPage, nextPage} = metadata;
  const { previousPage, nextPage, page, totalCount, totalPages } = metadata;
  console.log(metadata)

  return (
    <>
      {
        totalPages == 1 ? null
          :
          <div className="flex items-center justify-center gap-6">
            <Link to={previousPage} className={`font-bold text-gray-800 inline-flex items-center ${page == 1 ? "opacity-20" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </Link>
            {
              [...Array(totalPages)].map((e, i) => (
                <Link to={`${i == 0 ? "/tutorials" : `/tutorials/page/${i + 1}`}`} className={`flex items-center justify-center w-8 h-8 font-bold ${page - 1 == i ? "bg-gray-300" : "text-gray-500"}`}>{i + 1}</Link>
              ))
            }

            <Link to={nextPage} className={`font-bold text-gray-800 inline-flex items-center ${page == totalPages ? "opacity-20" : ""}`}>
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
      }
    </>
  )

  // return (
  //   <nav
  //     className="pagination-nav"
  //     aria-label={translate({
  //       id: 'theme.blog.paginator.navAriaLabel',
  //       message: 'Blog list page navigation',
  //       description: 'The ARIA label for the blog pagination',
  //     })}>
  //     <div className="pagination-nav__item">
  //       {previousPage && (
  //         <Link className="pagination-nav__link" to={previousPage}>
  //           <div className="pagination-nav__label">
  //             &laquo;{' '}
  //             <Translate
  //               id="theme.blog.paginator.newerEntries"
  //               description="The label used to navigate to the newer blog posts page (previous page)">
  //               Newer Entries
  //             </Translate>
  //           </div>
  //         </Link>
  //       )}
  //     </div>
  //     <div className="pagination-nav__item pagination-nav__item--next border-0">
  //       {nextPage && (
  //         <Link className="pagination-nav__link" to={nextPage}>
  //           <div className="pagination-nav__label">
  //             <Translate
  //               id="theme.blog.paginator.olderEntries"
  //               description="The label used to navigate to the older blog posts page (next page)">
  //               Older Entries
  //             </Translate>{' '}
  //             &raquo;
  //           </div>
  //         </Link>
  //       )}
  //     </div>
  //   </nav>
  // );
}

export default BlogListPaginator;
