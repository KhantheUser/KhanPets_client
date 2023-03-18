import React, { useEffect, useState } from "react";
import { publicRequest } from "../../util/apiCall";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import {
  AccountBalanceWallet,
  LocalShipping,
  AssignmentTurnedIn,
} from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BackToHome from "../../customCompoent/BackToHome/BackToHome";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const CheckoutPage = () => {
  const [charges, setCharges] = useState();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const getCharges = async () => {
      const charges = await publicRequest.get("/checkout/invoice");

      const results = charges.data.data.data;
      setCharges(results);
    };
    getCharges();
  }, []);
  console.log(charges);
  return (
    <div className="h-screen bg-gradient-to-r from-[#FFDCA2] to-[#FF7A7B] flex flex-col justify-center items-center">
      <BackToHome />

      <div className=" rounded-md bg-gradient-to-r  from-[#D74177]/20 to-[#FFE983] p-3 px-5">
        <h1 className="text-white font-semibold text-xl">Thông tin đơn hàng</h1>
      </div>
      <div
        className="w-7/12 h-[600px] overflow-y-scroll mx-auto bg-white relative rounded-md"
        style={{ boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 10px" }}
      >
        <div className="mt-16">
          {charges?.map((charge, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1bh-header"
              >
                <div className="flex ">
                  {charge.lines.data.map((item, index) => (
                    <div key={index} className="mr-6">
                      <div>
                        <img
                          src={charge.custom_fields[index].value}
                          alt=""
                          style={{ height: "100px", width: "150px" }}
                          className="rounded-md"
                        />
                      </div>
                      <div className="mt-2 flex flex-col justify-center">
                        <h2 className="text-[#fda401] font-semibold">
                          {item.description}
                        </h2>
                        <p>
                          Giá :{" "}
                          <span className="text-green-500 font-semibold">
                            {" "}
                            {item.amount / 100}$
                          </span>
                        </p>
                        <p>
                          Trạng thái :{" "}
                          <span className="text-green-500 font-semibold">
                            Success
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="">
                  <div className="flex">
                    <span className="font-medium block min-w-[100px]">
                      Người nhận :
                    </span>
                    <span>Thiện Đức</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium block min-w-[100px]">
                      Ngày thanh toán :
                    </span>
                    <span>
                      {new Date(charge.created * 1000).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="font-medium block min-w-[100px]">
                      Thành phố :
                    </span>
                    <span>{charge.customer_address.city}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium block min-w-[100px]">
                      Quốc gia :
                    </span>
                    <span>{charge.customer_address.country}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium block min-w-[100px]">
                      Địa chỉ 1 :
                    </span>
                    <span>{charge.customer_address.line1}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium block min-w-[100px]">
                      Địa chỉ 2(nếu có) :
                    </span>
                    <span>{charge.customer_address.line2 || "Không có"}</span>
                  </div>
                  <div className="flex mt-3 gap-x-8">
                    <div className="flex flex-col items-center">
                      <span className="block">
                        <AccountBalanceWallet
                          style={{ color: "#fda41a", fontSize: "50px" }}
                        />
                      </span>
                      <span>Đang chuẩn bị hàng</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="block">
                        <LocalShipping
                          style={{ color: "gray", fontSize: "50px" }}
                        />
                      </span>
                      <span>Đang vận chuyển</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="block">
                        <AssignmentTurnedIn
                          style={{ color: "gray", fontSize: "50px" }}
                        />
                      </span>
                      <span>Đã nhận hàng</span>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
