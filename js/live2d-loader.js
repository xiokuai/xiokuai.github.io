window.addEventListener('load', function() {
  if (!window.PIXI || !window.PIXI.live2d) {
    console.error('PIXI or pixi-live2d-display not loaded');
    return;
  }

  (async function() {
    try {
      const model = await PIXI.live2d.Live2DModel.from('/live2d-models/furina-new/furina.model3.json');
      const app = new PIXI.Application({
        backgroundAlpha: 0,
        width: 300,
        height: 400
      });
      app.view.style.position = 'fixed';
      app.view.style.left = '0';
      app.view.style.bottom = '0';
      app.view.style.zIndex = '999';
      document.body.appendChild(app.view);
      app.stage.addChild(model);
      model.scale.set(0.15);
      model.x = 150;
      model.y = 300;
    } catch (e) {
      console.error('Live2D load error:', e);
    }
  })();
});
