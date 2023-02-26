import ReactDom from 'react-dom';
import { PortalProps } from './Portal.types';

const Portal = ({ children, elementTo = document.body }: PortalProps) => {
  return ReactDom.createPortal(children, elementTo);
};

export { Portal };
