# 🦍 Gorilla Tag Web — Unity WebGL Port (Retina High-Res, Actual Icons UI, Up/Down Camera & iOS Safari Optimized)

An optimized, **auto-loading** WebGL port of Another Axiom's **Gorilla Tag** (based on [boolonx / gtagweb](https://github.com/boolonx/gtagweb)), engineered with **Retina high-resolution rendering**, zero blurs/filters, an **exact mobile UI layout with actual SVG icons and no button backgrounds (except WASD joystick)**, full up/down camera + hand drag controls, and iOS Safari crash/auto-zoom prevention.

---

## 🌟 What's Included & Fixed

### 1. 🎨 Zero Blurs & Retina High-Resolution Rendering
- **Retina High-Res (`2.0x` devicePixelRatio):** Resolves low-resolution and blurry graphics by rendering up to `2.0x` device pixel ratio (`1792 × 828` on iPhone 11 Pro Max and crisp Retina resolution on desktop displays).
- **No Blurs / No Filters:** Removed all CSS filters (`filter: none`) and backdrop blurs (`backdrop-filter: none`) so the 3D Unity canvas and UI render in pure, unaltered high definition.
- **Optimized Texture Loading:** Configured proper WebGL context attributes and streaming assets for fast, clean texture filtering.

### 2. 🎮 Exact Uploaded Image Mobile UI with Actual Icons & No Button Backgrounds
When you open the game on any touch/mobile device, the exact mobile UI overlay (`#mobile-ui-overlay`) appears automatically:
- **No Button Backgrounds & Transparent Joystick:** All buttons (`L-HAND`, `R-HAND`, `JUMP`, `TAB`, `ESC`) have **no box backgrounds or borders** (`background: transparent; border: none;`). The circular WASD joystick ring has **zero background opacity** (`background: transparent`).
- **Actual SVG Icons:**
  - **Bottom-Left Circular WASD Joystick:** A transparent circular ring with `W`, `A`, `S`, `D` labels and a smooth draggable center thumbstick knob. Dragging the knob smoothly triggers `W`, `A`, `S`, `D` keys for movement.
  - **Bottom-Right System & Hand Icons:** Clean SVG icons for **`(TAB)` / Trophy**, **`(ESC)` / Menu**, **`✋ L-HAND`**, **`⬆️ JUMP`**, and **`✋ R-HAND`**.

### 3. 🎥 Look Up/Down & Drag Gorilla Hands on Mobile Touch
- Features a full-screen background touch zone (`#camera-touch-zone`).
- Dragging your thumb anywhere outside the joystick/buttons sends real `mousemove` events with calculated `movementX` and `movementY` to Unity.
- This allows you to look around smoothly **LEFT, RIGHT, UP, and DOWN** with your camera while also clicking/dragging to move your gorilla hands and rig.

### 4. 📱 iPhone 11 Pro Max & iOS Safari Crash & Auto-Zoom Prevention
- **Prevent Auto-Zoom & Scroll Bounce:** Completely stops iOS Safari from zooming or bouncing:
  - `touch-action: none`, `position: fixed`, and `overflow: hidden` on `html`, `body`, and `#unity-canvas`.
  - Blocks double-tap zoom (`touchend` timestamp check `<= 300ms`).
  - Blocks pinch-to-zoom gestures (`gesturestart`, `gesturechange`, `gestureend` `e.preventDefault()`).
  - Blocks rubber-band scroll bouncing (`touchmove` `e.preventDefault()`).
- **WebGL Context Loss Auto-Recovery:** Automatically recovers from iOS GPU memory reclamation (`webglcontextlost`) by cleanly reloading the game instead of freezing.

### 5. ⚡ Auto-Loading Game (No Menu)
- Boots directly into Unity WebGL immediately on load with no menus or extra clicks required.

---

## 🚀 How to Host on GitHub Pages

1. **Fork or Push** this repository to your GitHub account (`https://github.com/YourUsername/gorilla-tag-web`).
2. Go to your repository on GitHub -> **Settings** -> **Pages**.
3. Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
4. Set **Branch** to `main` (or your working branch) and folder to `/ (root)`. Click **Save**.
5. Your game will be live within 1–2 minutes at:
   - **`https://YourUsername.github.io/gorilla-tag-web/`** (Auto-loads immediately!)

---

## 💻 Local Development & Server

```bash
# 1. Install dependencies
npm install

# 2. Start the local server
npm start
```

Open your browser to `http://localhost:3000/` to test the game and mobile UI.

---

## 🎮 Mobile Controls Overview

| Touch Control | Function |
| :--- | :--- |
| **Transparent WASD Joystick (Bottom-Left)** | Steer & Move Gorilla (`W`, `A`, `S`, `D`) |
| **Touch Camera Zone (Screen Drag)** | Look Up, Down, Left, Right + Drag Gorilla Hands |
| **`(TAB)` / `(ESC)` Icons (Bottom-Right)** | Toggle Scoreboard (`TAB`) / Open Menu (`ESC`) |
| **`✋ L-HAND`, `⬆️ JUMP`, `✋ R-HAND` Icons** | Hand Slaps (`Q`, `E`) & Leap (`Space`) |
