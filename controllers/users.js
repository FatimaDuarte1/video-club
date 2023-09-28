const express = require('express');

function create (req, res, next){
    res.send('Users create');
}

function list (req, res, next){
    res.send('Users list');
}

function index (req, res, next){
    res.send('Users index');
}

function replace (req, res, next){
    res.send('Users replaced');
}

function update (req, res, next){
    res.send('Users updated');
}

function destroy (req, res, next){
    res.send('Users destroyed');
}
module.exports ={
    list, index, list, create, replace, update, destroy
};