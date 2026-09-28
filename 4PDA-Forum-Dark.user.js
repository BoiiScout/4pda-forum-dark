// ==UserScript==
// @name         4PDA Forum Dark
// @namespace    4pda-forum-dark
// @version      1.6
// @description  Тёмная тема для форума 4PDA
// @homepageURL  https://github.com/BoiiScout/4pda-forum-dark
// @supportURL   https://github.com/BoiiScout/4pda-forum-dark/issues
// @downloadURL  https://raw.githubusercontent.com/BoiiScout/4pda-forum-dark/main/4PDA-Forum-Dark.user.js
// @updateURL    https://raw.githubusercontent.com/BoiiScout/4pda-forum-dark/main/4PDA-Forum-Dark.user.js
// @match        *://4pda.to/forum/*
// @match        *://*.4pda.to/forum/*
// @match        *://4pda.ru/forum/*
// @match        *://*.4pda.ru/forum/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(() => {
    'use strict';

    const css = `
        :root {
            color-scheme: dark;

            --bg: #0f1216;
            --bg2: #15191e;
            --bg3: #1b2026;
            --bg4: #222831;

            --border: #313943;
            --text: #d8dee6;
            --muted: #87919d;

            --link: #6ab0ff;
            --link-hover: #90c7ff;
            --accent: #2e5f8a;
        }

        html,
        body {
            background: var(--bg) !important;
            color: var(--text) !important;
        }

        body,
        #ipbwrapper,
        #wrapper,
        .wrapper,
        .container,
        .content,
        .page,
        main {
            background: var(--bg) !important;
            color: var(--text) !important;
        }

        a,
        a:link,
        a:visited {
            color: var(--link) !important;
        }

        a:hover,
        a:focus {
            color: var(--link-hover) !important;
        }

        #logostrip,
        #branding,
        #submenu,
        #userlinks,
        #userlinksguest,
        #navstrip,
        .navstrip,
        #ipbwrapper .header,
        #ipbwrapper .headerwrap,
        #ipbwrapper .topmenu,
        #ipbwrapper .submenu,
        #ipbwrapper .logo,
        #ipbwrapper .logo-wrap,
        #ipbwrapper .b-header,
        #ipbwrapper .b-logo {
            background: var(--bg2) !important;
            color: var(--text) !important;
            border-color: var(--border) !important;
            background-image: none !important;
        }

        #logostrip table,
        #logostrip tbody,
        #logostrip tr,
        #logostrip td,
        #submenu table,
        #submenu tbody,
        #submenu tr,
        #submenu td,
        #userlinks table,
        #userlinks tbody,
        #userlinks tr,
        #userlinks td {
            background: var(--bg2) !important;
            color: var(--text) !important;
            border-color: var(--border) !important;
        }

        .borderwrap,
        .borderwrapm,
        .post1,
        .post2,
        .bg1,
        .bg2,
        .row1,
        .row2,
        .row3,
        .post_body,
        .post_header,
        .post_header_container,
        .divpad,
        .tablebasic,
        .tablefill,
        .tablepad,
        .ipbtable,
        .ipbtable td,
        .postcolor,
        .post_wrap {
            background: var(--bg2) !important;
            color: var(--text) !important;
            border-color: var(--border) !important;
        }

        .post2,
        .bg2,
        .row2 {
            background: #12171c !important;
        }

        .maintitle,
        .maintitlecollapse,
        .subtitle,
        .subtitlediv,
        .formsubtitle,
        .bar,
        .barb,
        .barc,
        .postlinksbar,
        .row4,
        .catrow,
        table th {
            background: var(--bg3) !important;
            color: var(--text) !important;
            border-color: var(--border) !important;
            background-image: none !important;
        }

        .maintitle,
        .maintitlecollapse {
            background: var(--accent) !important;
        }

        .maintitle a,
        .maintitlecollapse a {
            color: #fff !important;
        }

        .post-block,
        .quote,
        .code,
        .spoiler,
        .hidetop,
        .hidemain,
        .quotetop,
        .quotemain,
        .codetop,
        .codemain {
            background: var(--bg3) !important;
            color: var(--text) !important;
            border-color: var(--border) !important;
        }

        .post-block > .block-title,
        .quotetop,
        .codetop,
        .hidetop {
            background: var(--bg4) !important;
            color: var(--link) !important;
        }

        .post-block > .block-body,
        .quotemain,
        .codemain,
        .hidemain {
            background: #171c22 !important;
        }

        pre,
        code {
            background: #0b0e12 !important;
            color: #dce6f2 !important;
            border-color: var(--border) !important;
        }

        .post_body,
        .post_body p,
        .post_body span,
        .post_body li,
        .normalname,
        .postdetails {
            color: var(--text) !important;
        }

        .postdetails,
        .edit,
        .post-edit-reason,
        .desc,
        .smalltext {
            color: var(--muted) !important;
        }

        .post-edit-reason,
        .edit-reason,
        .edit_reason,
        .post-edit,
        [class*="edit-reason"],
        [class*="edit_reason"] {
            background: var(--bg3) !important;
            color: var(--muted) !important;
            border-color: var(--border) !important;
            background-image: none !important;
        }

        .post-edit-reason div,
        .post-edit-reason span,
        .post-edit-reason input,
        .edit-reason div,
        .edit-reason span,
        .edit-reason input {
            background: var(--bg3) !important;
            color: var(--muted) !important;
            border-color: var(--border) !important;
        }

        input,
        textarea,
        select,
        button,
        .textarea,
        .searchinput,
        .gobutton,
        .button,
        .input-text,
        .forminput {
            background: #1d232a !important;
            color: var(--text) !important;
            border: 1px solid #3a434d !important;
            box-shadow: none !important;
        }

        input::placeholder,
        textarea::placeholder {
            color: var(--muted) !important;
        }

        input:focus,
        textarea:focus,
        select:focus {
            outline: none !important;
            border-color: var(--link) !important;
        }

        .popupmenu,
        .popupmenu-new,
        .popupmenu-item,
        .popupmenu-item-last,
        .popmenubutton,
        .popmenubutton-new,
        .popmenubutton-new-out,
        .menu,
        .dropdown,
        .dropdown-menu {
            background: var(--bg3) !important;
            color: var(--text) !important;
            border-color: var(--border) !important;
        }

        .popupmenu-item:hover,
        .popupmenu-item-last:hover,
        .dropdown-menu a:hover {
            background: var(--bg4) !important;
        }

        .pagelink,
        .pagelinklast,
        .minipagelink,
        .minipagelinklast {
            background: var(--bg3) !important;
            color: var(--text) !important;
            border-color: var(--border) !important;
        }

        .pagecurrent {
            background: var(--accent) !important;
            color: #fff !important;
            border-color: var(--border) !important;
        }

        #footer,
        #gfooter,
        #footer_utilities,
        #copyright,
        .footer,
        .footerwrap,
        .copyright,
        .botlinks,
        .b-footer,
        .bottommenu {
            background: var(--bg2) !important;
            color: var(--text) !important;
            border-color: var(--border) !important;
        }

        #footer table,
        #footer tbody,
        #footer tr,
        #footer td,
        #gfooter table,
        #gfooter tbody,
        #gfooter tr,
        #gfooter td,
        #copyright table,
        #copyright tbody,
        #copyright tr,
        #copyright td {
            background: var(--bg2) !important;
            color: var(--text) !important;
        }

        [style*="background-color: white"],
        [style*="background-color:white"],
        [style*="background-color:#fff"],
        [style*="background-color: #fff"],
        [style*="background-color:#ffffff"],
        [style*="background-color: #ffffff"],
        [style*="background: white"],
        [style*="background:white"],
        [style*="background:#fff"],
        [style*="background: #fff"],
        [bgcolor="white"],
        [bgcolor="#fff"],
        [bgcolor="#ffffff"],
        [bgcolor="#FFFFFF"] {
            background: var(--bg2) !important;
            color: var(--text) !important;
        }

        img,
        svg,
        video,
        iframe {
            filter: none !important;
        }

        ::-webkit-scrollbar {
            width: 11px;
            height: 11px;
        }

        ::-webkit-scrollbar-track {
            background: #0d1014;
        }

        ::-webkit-scrollbar-thumb {
            background: #39424c;
            border-radius: 8px;
            border: 2px solid #0d1014;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #4b5661;
        }

        ::selection {
            background: #29598a;
            color: #fff;
        }
    `;

    const earlyStyle = document.createElement('style');
    earlyStyle.textContent = `
        html, body {
            background: #0f1216 !important;
            color: #d8dee6 !important;
        }
    `;

    document.documentElement.appendChild(earlyStyle);
    GM_addStyle(css);

    function fixBlocks() {
        const selectors = [
            '#logostrip',
            '#submenu',
            '#userlinks',
            '#branding',
            '#footer',
            '#gfooter',
            '#copyright',
            '.footer',
            '.logo'
        ];

        for (const selector of selectors) {
            document.querySelectorAll(selector).forEach(block => {
                block.style.setProperty('background', '#15191e', 'important');
                block.style.setProperty('color', '#d8dee6', 'important');

                block.querySelectorAll('table, tbody, tr, td, div').forEach(el => {
                    const bg = getComputedStyle(el).backgroundColor;

                    if (
                        bg === 'rgb(255, 255, 255)' ||
                        bg === 'rgb(247, 247, 247)' ||
                        bg === 'rgb(245, 245, 245)' ||
                        bg === 'rgb(240, 244, 248)' ||
                        bg === 'rgb(238, 242, 246)'
                    ) {
                        el.style.setProperty('background', '#15191e', 'important');
                    }
                });
            });
        }
    }

    let fixQueued = false;

    function queueFix() {
        if (fixQueued) return;

        fixQueued = true;
        requestAnimationFrame(() => {
            fixQueued = false;
            fixBlocks();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', queueFix, { once: true });
    } else {
        queueFix();
    }

    const observer = new MutationObserver(queueFix);

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
