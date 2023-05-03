import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app";
import {ArticleListAction, getArticleList, getArticleListInited} from "../../config";

export const articlePageInitialEffect = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'article/articlePageInitialEffect',
    async (_, {getState, dispatch}) => {
        const inited = getArticleListInited(getState());

        if (!inited) {
            dispatch(ArticleListAction.initArticleListView());
            dispatch(getArticleList(1));
        }

    }
)