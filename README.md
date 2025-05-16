# YT Music Swap Like/Dislike

A Chrome extension that swaps the Like and Dislike buttons in YouTube Music.

## Install

1. Go to chrome://extensions/
2. Enable **Developer mode**
3. Click **Load unpacked** and select this folder

## How it works

- Finds `<ytmusic-like-button-renderer>`
- Swaps `#button-shape-like` before `#button-shape-dislike`
- Adds 4 px margins via `!important`
- Uses MutationObserver + interval for SPA support