import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React,{useState, useEffect} from "react";
import {firebase} from './config';

import Login from './src/Login';
import Register from './src/Register';
import Dashboard from './src/Dashboard';
import Header from "./components/Header";

const Stack