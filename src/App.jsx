import { Outlet } from 'react-router-dom';
// import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { usePreview } from 'react-dnd-preview';

import { bodyPartsImport } from './../src/pages/MonsterPage/bodyPartsImport';

const options = {
  enableMouseEvents: true,
};
const MyPreview = () => {
  const preview = usePreview();
  if (!preview.display) {
    return null;
  }
  const { itemType, item, style } = preview;

  const bodyPart = bodyPartsImport[item.id].element;

  return (
    <img
      src={bodyPart.props.src}
      alt={bodyPart.props.className}
      className={bodyPart.props.className}
      style={{ ...style, opacity: '0.5' }}
    />
  );
};

export const App = () => {
  return (
    <>
      {/* <Header /> */}
      <DndProvider backend={TouchBackend} options={options}>
        <Outlet />
        <MyPreview />
      </DndProvider>
      <Footer />
    </>
  );
};
