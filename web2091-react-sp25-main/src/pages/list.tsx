import { useEffect, useState } from "react";
import IBook from "../interface/book";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function ProductList() {

  const [books, setBooks] = useState<IBook[]>([])
  useEffect(() => {
    const getAllBook = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/books`)
        setBooks(data)
      } catch (error) {
        toast.error((error as AxiosError).message)
      }
    }
    getAllBook()
  }, [])
  const handleDelete = async (id: number) => {
    try {
      if (window.confirm("ban co chac muon xoa khong")) {
        await axios.delete(`http://localhost:3000/books/${id}`)
        toast.success("xoa thanh coong")
        setBooks((prev: IBook[]) => {
          return prev.filter((item: IBook) => {
            return item.id != id
          })
        })
      }
    } catch (error) {
      toast.error((error as AxiosError).message)
    }
  }

  return (
    <div>
      <h1>Danh sách</h1>
      <table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">tên </th>
            <th scope="col">tác giả </th>
            <th scope="col">giá </th>
            <th scope="col">miêu tả </th>
            <th scope="col">hình ảnh  </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            books?.map((item: IBook, index: number) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.author}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td><img src={item.image} height={'50px'} alt="" /></td>

                  <td>
                    <button className="btn btn-danger" onClick={() => { handleDelete(item.id) }}>xoa</button>
                    <Link className="btn btn-warning" to={`edit/${item.id}`}>sua</Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;