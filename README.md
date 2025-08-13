# Hacker News New Tab

A Chrome extension that automatically opens all external content links on Hacker News in new tabs, making it easier to browse multiple articles without losing your place in the discussion.

## Why it's notable

Unlike the [dozens](https://chromewebstore.google.com/detail/hacker-news-new-tab/fmlhpmapmklbhoekajeimbodkpinefmo?hl=+en) [of](https://github.com/jcordeiro/HackerNewsExtension) [other](https://chromewebstore.google.com/detail/hacker-news-new-tab/fmlhpmapmklbhoekajeimbodkpinefmo?hl=en-GB) [extensions](https://github.com/jay3sh/hnopennewtab) that [already](https://github.com/tcjr/new-tab-links-extension) [exist](https://github.com/mukwevhom/hackernews-newtab) for this purpose, this version has been recently created and is updated for [Chrome Manifest v3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3)

## What it does

This extension modifies the behavior of links on Hacker News (news.ycombinator.com) by:

- Opening all external content links in new tabs
- Preserving Hacker News navigation links (like comments, replies, votes) in the same tab
- Adding `rel="noopener noreferrer"` for security

The extension specifically excludes internal HN links such as:
- Reply links
- Vote buttons
- Login/logout pages
- User profile links

## Installation

### Method 1: Load as Unpacked Extension (Developer Mode)

1. **Enable Developer Mode in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`
   - Toggle the "Developer mode" switch in the top right corner

2. **Load the Extension:**
   - Click the "Load unpacked" button
   - Navigate to and select the folder containing this extension
   - The extension will appear in your extensions list

3. **Verify Installation:**
   - Visit [Hacker News](https://news.ycombinator.com)
   - Click on any article link - it should open in a new tab
   - Comment links should still open in the same tab

### Method 2: Pack and Install (Optional)

1. In `chrome://extensions/`, click "Pack extension"
2. Select the extension folder
3. Chrome will create a `.crx` file
4. Drag the `.crx` file into the extensions page to install

## Usage

Once installed, the extension works automatically on all Hacker News pages. No configuration is needed.

## Files

- `manifest.json` - Extension configuration and permissions
- `content.js` - Main script that modifies link behavior

## Permissions

This extension requires no special permissions and only runs on Hacker News pages.