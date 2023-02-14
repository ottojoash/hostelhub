import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React,{useState, useEffect} from "react";
import {firebase} from './config';

import Login from './src/Login';
import Register from './src/Register'