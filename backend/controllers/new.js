import New from '../models/new';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';

export const create = (req, res) => {

    // let form = new formidable.IncomingForm();
    // form.keepExtensions = true;
    // form.parse(req, (err, fields, files) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: " them tin moi khong thanh cong"
    //         })
    //     }
    //     const { name, description } = fields;
    //     if (!name || !description) {
    //         return res.status(400).json({
    //             error: " ban can nhap day du thong tin"
    //         })
    //     }
    //     let news = new New(fields);
    //     if (files.photo) {
    //         if (files.photo.size > 100000) {
    //             res.status(400).json({
    //                 error: " ban nen upload anh < 1mb"
    //             })
    //         }
    //         news.photo.data = fs.readFileSync(files.photo.path)
    //         news.photo.contentType = files.photo.path;
    //     }
    let news = new New(req.body);

    news.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: " khong them duoc tin moi"
            })
        }
        res.json(data)
    })

    // })

}

export const newById = (req, res, next, id) => {
    New.findById(id).exec((err, news) => {
        if (err || !product) {
            res.status(400).json({
                error: " khong tim thay tin moi"
            })
        }
        req.news = news
        next();
    })
}

export const read = (req, res) => {
    return res.json(req.news);
}

export const list = (req, res) => {
    // let order = req.query.order ? req.query.order : 'asc';
    // return res.json(req.product);
    New.find((err, data) => {
        if (err) {
            error: "khong tim thay tin moi"
        }
        res.json(data)
    })
}

export const remove = (req, res) => {
    let news = req.news;
    news.remove((err, deletedNew) => {
        if (err) {
            return res.status(400).json({
                error: " khong xoa duoc tin moi"
            })
        }
        res.json({
            deletedNew,
            message: " tin moi da duoc xoa thanh cong"
        })
    })
}

export const update = (req, res) => {
    // let form = new formidable.IncomingForm();
    // form.keepExtensions = true;
    // form.parse(req, (err, fields, files) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: " sua tin khong thanh cong"
    //         })
    //     }
    //     const { name, description } = fields;
    //     if (!name || !description) {
    //         return res.status(400).json({
    //             error: " ban can nhap day du thong tin"
    //         })
    //     }
    //     let news = req.news;
    //     news = _.assignIn(news, fields);
    //     if (files.photo) {
    //         if (files.photo.size > 100000) {
    //             res.status(400).json({
    //                 error: " ban nen upload anh < 1mb"
    //             })
    //         }
    //         news.photo.data = fs.readFileSync(files.photo.path)
    //         news.photo.contentType = files.photo.path;
    //     }
    let news = req.news;
    news = _.assignIn(news, req.body);
    news.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: " khong sua duoc san pham"
            })
        }
        res.json(data)
    })

    // })

}
