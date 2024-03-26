import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getDataFromLocalRead, getDataFromLocalWishList } from '../utility/localstorage';
import Books from '../Books/Books';
import WishBook from '../WishBook/WishBook';

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);
  useEffect(() => {
    const data = getDataFromLocalRead();
    setReadBooks(data);
  }, []);
  
  useEffect(() => {
    const wishData = getDataFromLocalWishList();
    setWishListBooks(wishData);
  }, []);

  const sortByRating = () => {
    const sortedBooks = [...readBooks].sort((a, b) => b.rating - a.rating);
    const sortedWishList = [...wishListBooks].sort((a, b) => b.rating - a.rating);
    setReadBooks(sortedBooks);
    setWishListBooks(sortedWishList);
  };

  const sortByPages = () => {
    const sortedBooks = [...readBooks].sort((a, b) => b.totalPages - a.totalPages);
    const sortedWishList = [...wishListBooks].sort((a, b) => b.totalPages - a.totalPages);
    setReadBooks(sortedBooks);
    setWishListBooks(sortedWishList);
  };

  const sortByYear = () => {
    const sortedBooks = [...readBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing );
    const sortedWishList = [...wishListBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    setReadBooks(sortedBooks);
    setWishListBooks(sortedWishList);
  };

  return (
    <div>
      <div className='text-center'>
        <details className="dropdown">
          <summary className="m-1 btn">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a onClick={sortByRating}>Rating</a></li>
            <li><a onClick={sortByPages}>Number of Pages</a></li>
            <li><a onClick={sortByYear}>Publisher Year</a></li>
          </ul>
        </details>
      </div>

      <h2>Books:{readBooks.length}</h2>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {readBooks.map(books => <Books key={books.id} books={books}></Books>)}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>wishListBooks:{wishListBooks.length}</h2>

          <div>
            {wishListBooks.map(wishBook => <WishBook key={wishBook.id} wishBook={wishBook}></WishBook>)}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;