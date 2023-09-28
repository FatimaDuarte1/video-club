const express = require ('express');

function create (req, res, next){
    res.send('Directors create');
}

function list (req, res, next){
    res.send('Directors list');
}

function index (req, res, next){
    res.send('Directors index');
}

function replace (req, res, next){
    res.send('Directors replaced');
}

function update (req, res, next){
    res.send('Directors updated');
}

function destroy (req, res, next){
    res.send('Directors destroyed');
}

module.exports ={
    list, index, list, create, replace, update, destroy
};