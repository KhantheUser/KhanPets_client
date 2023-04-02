import React, { useEffect, useState } from "react";
import CardItem from "../../components/Card/Card";
import Pagination from "@material-ui/lab/Pagination";
import "./ProductPage.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import { publicRequest } from "../../util/apiCall";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../../customCompoent/Loading/Loading";
function ProductsPage() {
  const [products, setProduct] = useState([]);
  const [params, setParams] = useSearchParams("");

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const res = await publicRequest.get("/animal", { params: params });
        setProduct(res.data.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAnimals();
  }, [params]);
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 270,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const navigate = useNavigate();
  const [generic, setGeneric] = useState("");
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setParams({ page: value });
  };
  const handleChangeType = (event) => {
    setGeneric(event.target.value);
    if (event.target.value === "all") {
      navigate("/products");
      return;
    }
    setParams({
      type: event.target.value,
      page: page,
    });
  };

  return (
    <>
      <div className="productPage">
        <Navbar />
        <div style={{ height: 100 }}></div>
        <div className="filter">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">
              Chọn loại thú cưng
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={generic}
              onChange={handleChangeType}
            >
              <MenuItem value={"all"}>Tất cả</MenuItem>
              <MenuItem value={"dog"}>Chó</MenuItem>
              <MenuItem value={"cat"}>Mèo</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="productWrapper">
          {products.length === 0 ? (
            <Loading />
          ) : (
            products.map((product, index) => (
              <div key={index} className="cardWrapper px-2">
                <CardItem product={product} />
              </div>
            ))
          )}
        </div>
        <div className="pagination">
          <Pagination
            count={products.length / 8 + 1}
            page={page}
            onChange={handleChange}
            color="secondary"
            className="text-[#fda401]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;
