import 'vtk.js/Sources/favicon'; // Иконка для страницы

import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';

// Создание окна для рендеринга
const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance();
const renderer = fullScreenRenderer.getRenderer();
const renderWindow = fullScreenRenderer.getRenderWindow();

// Создание источника данных (конус)
const coneSource = vtkConeSource.newInstance({ height: 1.0 });

// Создание маппера и актёра
const mapper = vtkMapper.newInstance();
mapper.setInputConnection(coneSource.getOutputPort());

const actor = vtkActor.newInstance();
actor.setMapper(mapper);

// Добавление актёра в рендерер и запуск рендеринга
renderer.addActor(actor);
renderer.resetCamera();
renderWindow.render();