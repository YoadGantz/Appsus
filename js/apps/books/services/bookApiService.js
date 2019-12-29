export default { getBooksForSearch }

function getBooksForSearch(value) {
  let prmRes = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`);
  return prmRes.then(res => {

    let fullBooks = res.data.items
    let partialBooks = fullBooks.map((fullBook) => {
      let partialBook = {
        id: fullBook.id,
        title: fullBook.volumeInfo.title,
        subtitle: fullBook.volumeInfo.subtitle,
        authors: fullBook.volumeInfo.authors,
        publishedDate: fullBook.volumeInfo.publishedDate,
        description: fullBook.volumeInfo.description,
        pageCount: fullBook.volumeInfo.pageCount,
        categories: fullBook.volumeInfo.categories,
        thumbnail: fullBook.volumeInfo.imageLinks.thumbnail,
        language: fullBook.volumeInfo.language,
        listPrice: {
          amount: 20,
          currencyCode: 'USD',
          isOnSale: false
        }
      }
      return partialBook
    })
    return [...partialBooks]
  }
  )
}








