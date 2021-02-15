import { ReactInstance, Location, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
    const r360 = new ReactInstance(bundle, parent, {
        fullScreen: true,
        ...options
    });

    const myCylinderSurface = new Surface(
        4680,
        600,
        Surface.SurfaceShape.Cylinder
    );

    r360.renderToSurface(
        r360.createRoot('react360WebSite', {
        }),
        myCylinderSurface
    );

    r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
