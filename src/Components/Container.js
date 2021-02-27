import React from "react";
import Header from "./Header";
import Section from "./Section";
import Loader from "./Loader";

const Container = ({loading}) => loading ? <Loader/> : (<><Header/><Section/></>);

export default Container;