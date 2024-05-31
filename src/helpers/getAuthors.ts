import { mockedAuthorsList } from "../constants";


export default function getAuthors(authorsList: Array<String>): Array<String> {
    let authorNames = [];

    for (let i = 0; i < authorsList.length; i++) {
        let authorID = authorsList[i];
        let authorName = mockedAuthorsList.find(author => author.id === authorID)?.name;
        if (authorName !== undefined) {
            authorNames.push(authorName);
        }
    }

    return authorNames;
}