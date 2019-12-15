<div align="center">

  <h1>Game of Life</h1>
  <strong><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> implementation using Rust, Javascript and WebAssembly!</strong>

</div>

## About

Try it out at <https://wasm-game-of-life.shalzz.now.sh>!

## Run

Build the webassembly module with `wasm-pack build`

```
wasm-pack build
```

start the webserver with `npm run start`

```
cd www
npm run start
```

Open the webpage at http://localhost:808

## Build 

### 🛠️ Build with `wasm-pack build`

```
wasm-pack build
```

### 🔬 Test in Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```

### 🎁 Deploy

1. Build the wasm module
```
wasm-pack build
```

2. Bundle with our js and html
```
cd www
npm run build
```

3. Deploy to @zeit/now
```
cd www/dist
now
```
