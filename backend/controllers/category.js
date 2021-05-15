import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';
import Category from '../models/category';

export const create = (req, res) => {

    // let form = new formidable.IncomingForm();
    // form.keepExtensions = true;
    // form.parse(req, (err, fields, files) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: " them danh muc khong thanh cong"
    //         })
    //     }
    // const { name } = req.body;
    // if (!name) {
    //     return res.status(400).json({
    //         error: " ban can nhap ten danh muc"
    //     })
    // }
    let category = new Category(req.body);

    category.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: " khong them duoc danh muc"
            })
        }
        res.json(data)
    })

    // })

}

export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            res.status(400).json({
                error: " khong tim thay danh muc"
            })
        }
        req.category = category
        next();
    })
}

export const list = (req, res) => {
    // let order = req.query.order ? req.query.order : 'asc';
    // return res.json(req.product);
    Category.find((err, data) => {
        if (err) {
            error: "khong tim thay danh muc"
        }
        res.json(data)
    })
}

export const remove = (req, res) => {
    let category = req.body;
    category.remove((err, deletedCategory) => {
        if (err) {
            return res.status(400).json({
                error: " khong xoa duoc danh muc"
            })
        }
        res.json({
            deletedCategory,
            message: " danh muc da duoc xoa thanh cong"
        })
    })
}

export const update = (req, res) => {
    // const { name } = req.body;
    // if (!name) {
    //     return res.status(400).json({
    //         error: " ban can nhap day du thong tin"
    //     })
    // }
    let category = req.category;
    category = _.assignIn(category, req.body);
    category.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: " khong sua duoc danh muc"
            })
        }
        res.json(data)
    })

}