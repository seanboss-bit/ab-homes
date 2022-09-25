import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { publicRequest } from "../requestMethods";

const Verify = () => {
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await publicRequest.get(
          `/users/${params.id}/${params.token}`
        );
        console.log(res);
        if (res.data.message === "Email Verified") {
          navigate("/login");
          toast.success('Email Verified Successfully')
        }
      } catch (error) {
        console.log(error);
      }
    };
    verifyEmail();
    // eslint-disable-next-line
  }, [params]);
  return <div></div>;
};

export default Verify;
