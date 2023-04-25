import {render, screen} from "@testing-library/react";
import ArticlesDetailsPage from "pages/ArticlesDetailsPage/ArticlesDetailsPage";
import {JestProvider} from "app";

describe('Тестирование страницы ArticleDetailsPage', () => {
    const setup = () => {
        render(
            <JestProvider>
                <ArticlesDetailsPage/>
            </JestProvider>
        )
    }

    test('Тайтл должен отобразится', () => {
        setup();

        const title = screen.getByText('Comments');

        expect(title).toBeInTheDocument();
    })
});