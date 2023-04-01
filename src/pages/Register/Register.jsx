import styled from "styled-components";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://toiyeumeo.com/wp-content/uploads/2021/03/hinh-anh-meo-xinh-ngo-nghinh.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  @media (max-width: 896px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
  color: white;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const InputContainer = styled.div`
  flex: 1;

  min-width: 40%;
`;
const Input = styled.input`
  width: 95%;
  margin: 20px 10px 0 0;
  padding: 10px;
  outline: none;
  border-radius: 25px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin-top: 10px;
  color: white;
`;
const Button = styled.button`
  padding: 15px 20px;
  border: none;
  border-radius: 25px;

  background-color: teal;
  color: white;
  display: block;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
const Error = styled.p`
  color: red;
`;

function Register() {
  const dispatch = useDispatch();
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const schema = yup.object({
    phone: yup
      .string()
      .required("Must have required field")
      .matches(regexPhoneNumber, "Sai định dạng"),
    username: yup
      .string()
      .required("Must have required field")
      .matches("^[a-zA-Z0-9_ ]*$", "Sai định dạng"),
    email: yup
      .string()
      .required("Must have required field")
      .matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}", "Sai định dạng"),
    password: yup
      .string()
      .required("Password is mendatory")
      .min(8, "Password must be at 8 char long"),

    passwordConfirm: yup
      .string()
      .required("Password is mendatory")
      .oneOf([yup.ref("password")], "Passwords does not match"),
    /* birth : yup.date('Sai hoac thieu').required('Must have required field') */
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const user = {};
    user.username = data.username;
    user.password = data.password;
    user.phone = data.phone;
    user.passwordConfirm = data.passwordConfirm;
    user.birth = new Date(data.birth);
    user.email = data.email;

    dispatch(registerUser(user));
  };
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input
              name="username"
              {...register("username")}
              placeholder="User name"
            />
            <Error>{errors.username?.message}</Error>
          </InputContainer>
          <InputContainer>
            <Input
              name="phone"
              {...register("phone")}
              placeholder="Phone number"
            />

            <Error>{errors.phone?.message}</Error>
          </InputContainer>
          <InputContainer>
            <Input
              type={"date"}
              name="birth"
              {...register("birth")}
              placeholder="Date of birth"
            />

            <Error>{errors.birth?.message}</Error>
          </InputContainer>

          <InputContainer>
            <Input name="email" {...register("email")} placeholder="Email" />
            <Error>{errors.email?.message}</Error>
          </InputContainer>

          <InputContainer>
            <Input
              type="password"
              {...register("password")}
              placeholder="Password"
            />

            <Error>{errors.password?.message}</Error>
          </InputContainer>

          <InputContainer>
            <Input
              type="password"
              {...register("passwordConfirm")}
              placeholder="Confirm password"
            />
            <Error>{errors.passwordConfirm?.message}</Error>
          </InputContainer>

          <Agreement>
            By creating an account , I consent to the processing of my personal
            data in accodance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <p
            className="text-[13px] underline mt-3 text-white cursor-pointer "
            onClick={() => navigate("/login")}
          >
            I had an account
          </p>

          <div className="flex w-full justify-center">
            <Button onClick={onSubmit}>CREATE ACCOUNT</Button>
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
