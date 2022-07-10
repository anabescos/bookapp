import { useEffect, useState } from "react";
import { useAuthContext } from "contexts/authContext";
import apiClient from "utils/apiClient";

export default function Books() {
    const { authTokens } = useAuthContext();
    const [books, setBooks] = useState(null);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [hasFailed, setHasFailed] = useState(false);

    useEffect(
        function () {
            async function fetchBookList() {
                setIsSuccessful(false);
                setHasFailed(false);
                try {

                    const json = await apiClient.get('/books', {
                        Authorisation: `Bearer ${authTokens.token}`
                    });
                    setIsSuccessful(true);
                    setHasFailed(false);
                    console.log(json.data);
                    setBooks(json.data);

                } catch (error) {
                    setIsSuccessful(false);
                    setHasFailed(true);
                }
            }
            fetchBookList();
        }, [authTokens.token]
    );

    if (isSuccessful.isError || books === null) {
        return <div>Sorry, there was an error trying to load your book list</div>;
    }

    return (
        <div>
            <h1>My books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}