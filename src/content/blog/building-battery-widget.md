---
title: Building a floating battery widget for Windows
description: How I built a frameless, always-on-top battery widget using Electron and React — and what I learned along the way.
date: "2024-03-15"
tags: [Electron, React, Windows]
---

## The problem

I kept forgetting to charge my laptop mid-work. Windows has a battery icon in the taskbar but I never looked at it — it was too small and easy to ignore.

So I built a floating widget that sits in the corner of my screen, always visible, no matter what app is open.

## What I used

- **Electron** — for the desktop app shell
- **React + Vite** — for the UI
- **Web Battery API** — `navigator.getBattery()` gives you live charge level and charging status

## The code

Getting the battery level is surprisingly simple:

```javascript
const battery = await navigator.getBattery();

battery.addEventListener('levelchange', () => {
  console.log(`Battery: ${battery.level * 100}%`);
});
```

The tricky part was making the window frameless and always-on-top in Electron:

```javascript
const win = new BrowserWindow({
  width: 120,
  height: 60,
  frame: false,
  transparent: true,
  alwaysOnTop: true,
  skipTaskbar: true,
});
```

## Auto-launch on startup

Instead of using the Windows registry, I dropped a `.lnk` shortcut into the Windows startup folder:

```
%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup
```

Simple and works every time.

## Download

You can grab the `.exe` below and run it directly — no install needed.

[Download Battery Widget (.exe)](/downloads/battery-widget.exe)
