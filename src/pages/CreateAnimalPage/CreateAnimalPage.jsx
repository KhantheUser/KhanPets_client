import React, { useEffect, useRef, useState } from "react";
import "./CreateAnimal.scss";
import { useForm } from "react-hook-form";
import { AiFillCamera, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Snackbar,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { publicRequest } from "../../util/apiCall";
import BackToHome from "../../customCompoent/BackToHome/BackToHome";
import { useNavigate } from "react-router-dom";

function CreateAnimalPage() {
  const navigate = useNavigate();
  const [tryImage, setTryImage] = useState([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);

  const handleTryImage = (e) => {
    setTryImage(e.target.files);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (images.length !== 4) return;
    const newData = {
      ...data,
      quantity: 1,
      user: currentUser._id,
      img: images,
    };
    const postData = async () => {
      setLoading(true);
      setModalAdd(true);
      const res = await publicRequest.post("/animal", newData);
      setLoading(false);
      setModalAdd(false);

      navigate("/products");
    };
    postData();
  }, [images.length]);
  const [openModal, setOpenModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const [modalAdd, setModalAdd] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const uploadFiles = async (file) => {
    const storage = getStorage();
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log("Upload error: " + error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImages((pre) => [...pre, downloadURL]);
        });
      }
    );
  };
  return (
    <div className="createAnimal relative">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Bạn hãy chọn đủ 4 ảnh
        </Alert>
      </Snackbar>
      <BackToHome />
      <Modal
        open={modalAdd}
        className="flex items-center "
        // onClose={handleCloseModal}
      >
        <div className="h-[500px]  bg-white w-1/2 mx-auto">
          <h1 className="text-center text-[#fda401] flex items-center justify-center text-2xl font-medium border-b-slate-400 border-2 py-2">
            Đang tải sản phẩm...
          </h1>
          <div className="flex items-center justify-center">
            <img
              src="https://media.giphy.com/media/3o7TKtbdY5oZuiyucg/giphy.gif"
              alt=""
            />
          </div>
        </div>
      </Modal>
      <Modal
        open={openModal}
        className="flex items-center "
        // onClose={handleCloseModal}
      >
        <div className="h-[500px]  bg-white w-1/2 mx-auto">
          <h1 className="text-center text-[#fda401] flex items-center justify-center text-2xl font-medium border-b-slate-400 border-2 py-2">
            Chính sách bán hàng
            <AiOutlineShoppingCart />
          </h1>
          <div className="p-4 space-y-5 h-[70%] overflow-y-scroll">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((para, index) => (
              <p key={index}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                ullam, ab possimus ipsa iste quo ipsum, adipisci fugit
                reiciendis doloremque beatae atque repellendus iure?
              </p>
            ))}
          </div>
          <div className="my-3 px-4 flex flex-col items-center">
            <p>
              If you agree with my principle . Please type <b>I agree</b>
            </p>
            <input
              onKeyDown={(e) => {
                if (e.keyCode === 13 && e.target.value === "I agree") {
                  setOpenModal(false);
                }
              }}
              placeholder="I agree"
              type="text"
              className="border-2 border-[#fda401] mt-2 outline-none p-2 rounded-md"
            />
          </div>
        </div>
      </Modal>
      <form
        onSubmit={handleSubmit(async (data) => {
          if (tryImage.length === 4) {
            for (let i = 0; i < tryImage.length; i++) {
              await uploadFiles(tryImage[i]);
            }
            setData(data);
          } else {
            setOpen(true);
          }
        })}
        className="form"
      >
        <div className="flex flex-wrap">
          <div className="input">
            <Input
              {...register("name", { required: true })}
              fullWidth="100%"
              placeholder="Tên thú cưng"
            />
            {errors.name && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          <div className="input">
            <Input
              {...register("address", { required: true })}
              fullWidth="100%"
              placeholder="Địa chỉ"
            />
          </div>
          <div className="input">
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup name="gender1">
                <FormControlLabel
                  {...register("sex", { required: true })}
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  {...register("sex", { required: true })}
                  label="Male"
                />
              </RadioGroup>
              {errors.sex && (
                <span className="text-red-400">This field is required</span>
              )}
            </FormControl>
          </div>
          <div className="input">
            <FormControl component="fieldset">
              <FormLabel component="legend">Chó/Mèo</FormLabel>
              <RadioGroup name="gender1">
                <FormControlLabel
                  {...register("type", { required: true })}
                  value="dog"
                  control={<Radio />}
                  label="Chó"
                />
                <FormControlLabel
                  {...register("type", { required: true })}
                  value="cat"
                  control={<Radio />}
                  label="Mèo"
                />
              </RadioGroup>
              {errors.type && (
                <span className="text-red-400">This field is required</span>
              )}
            </FormControl>
          </div>
          <div className="input">
            <Input
              fullWidth="100%"
              placeholder="Số lượng : 1"
              value={"Số lượng : 1"}
              disabled
            />
          </div>
          <div className="input">
            <Input
              fullWidth="100%"
              placeholder="Tuổi"
              type="number"
              {...register("age", { required: true })}
            />
            {errors.age && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          <div className="input">
            <Input
              fullWidth="100%"
              placeholder="Giống chó/mèo"
              type="text"
              {...register("generic", { required: true })}
            />
            {errors.generic && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          <div className="input">
            <Input
              {...register("desc", { required: true })}
              fullWidth="100%"
              placeholder="Mô tả"
              type="text"
            />
            {errors.desc && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>
          <div className="input">
            <Input
              {...register("price", { required: true })}
              fullWidth="100%"
              placeholder="Giá bán"
              type="number"
            />
            {errors.price && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          <div className="input">
            <div className="flex">
              {Object.values(tryImage)?.map((img, index) => (
                <div
                  key={index}
                  className="tryImage h-12 w-12 mb-10 overflow-hidden flex items-center justify-center"
                >
                  {img ? (
                    <img src={URL.createObjectURL(img)} alt={"pasd"} />
                  ) : (
                    <AiFillCamera className="text-red-200" />
                  )}
                </div>
              ))}
            </div>

            <label className="text-white" htmlFor="img" component="legend">
              Chọn ảnh
            </label>

            <input
              onChange={(e) => handleTryImage(e)}
              style={{ display: "none" }}
              type="file"
              id="img"
              multiple
            />
          </div>
        </div>
        <button
          className="px-20 py-3 bg-orange-500 block text-white rounded-md mx-auto mt-8 hover:bg-orange-400 transition ease-linear"
          type="submit"
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default CreateAnimalPage;
