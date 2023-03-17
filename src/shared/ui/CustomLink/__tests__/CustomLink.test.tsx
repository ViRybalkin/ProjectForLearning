import { render, screen } from '@testing-library/react';
import { JestProvider } from 'app';
import { CustomLink } from '../CustomLink';

describe('Тестирование компонента CustomLink', () => {
  const setup = (className?: string, name = '', to = '') => {
    render(
      <JestProvider>
        <CustomLink to={to} className={className} name={name} />
      </JestProvider>
    );
  };

  test('Компонент должен отрендериться', () => {
    setup();

    const customLink = screen.getByTestId('customLinkTestId');

    expect(customLink).toBeInTheDocument();
  });

  test('Компонент должен содержать корректный класс', () => {
    setup();

    const customLink = screen.getByTestId('customLinkTestId');

    expect(customLink).toHaveClass('link');
  });

  test('Если класс передан компонент должен содержать корректный класс', () => {
    setup('someClass', '', '');

    const customLink = screen.getByTestId('customLinkTestId');

    expect(customLink).toHaveClass('link');
    expect(customLink).toHaveClass('someClass');
  });

  test('Если name передан компонент должен содержать корректный текст', () => {
    const name = 'Название ссылки';
    setup('', name, '');

    const linkName = screen.getByText(name);

    expect(linkName).toBeInTheDocument();
  });

  test('Если to передан компонент должен содержать корректный аттрибут', () => {
    const link = '/someLink';
    setup('someClass', '', link);

    const customLink = screen.getByTestId('customLinkTestId');

    expect(customLink).toHaveAttribute('href', link);
  });
});
