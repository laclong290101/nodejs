import Product from '../models/product';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';

export const create = (req, res) => {

    // let form = new formidable.IncomingForm();
    // form.keepExtensions = true;
    // form.parse(req, (err, fields, files) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: " them san pham khong thanh cong"
    //         })
    //     }
    //     const { name, description, price } = fields;
    //     if (!name || !description || !price) {
    //         return res.status(400).json({
    //             error: " ban can nhap day du thong tin"
    //         })
    //     }
    //     let product = new Product(fields);
    //     if (files.photo) {
    //         if (files.photo.size > 100000) {
    //             res.status(400).json({
    //                 error: " ban nen upload anh < 1mb"
    //             })
    //         }
    //         product.photo.data = fs.readFileSync(files.photo.path)
    //         product.photo.contentType = files.photo.path;
    //     }
    let product = new Product(req.body);
    product.save((err, data) => {
        if (err) {
            console.log(err.message);
            res.status(400).json({
                error: " khong them duoc san pham"
            })
        }
        res.json(data)
    })

    // })

    // })
}

export const productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            res.status(400).json({
                error: " khong tim thay san pham"
            })
        }
        req.product = product
        next();
    })
}

export const read = (req, res) => {
    return res.json(req.product);
}

export const list = (req, res) => {
    // let order = req.query.order ? req.query.order : 'asc';
    // return res.json(req.product);
    Product.find((err, data) => {
        //select("-photo")
        if (err) {
            error: "khong tim thay san pham"
        }
        res.json(data)
    })
}

export const remove = (req, res) => {
    let product = req.product;
    product.remove((err, deletedProduct) => {
        if (err) {
            return res.status(400).json({
                error: " khong xoa duoc san pham"
            })
        }
        res.json({
            deletedProduct,
            message: " san pham da duoc xoa thanh cong"
        })
    })
}

export const update = (req, res) => {
    // let form = new formidable.IncomingForm();
    // form.keepExtensions = true;
    // form.parse(req, (err, fields, files) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: " sua san pham khong thanh cong"
    //         })
    //     }
    //     const { name, description, price } = fields;
    //     if (!name || !description || !price) {
    //         return res.status(400).json({
    //             error: " ban can nhap day du thong tin"
    //         })
    //     }
    //     let product = req.product;
    //     product = _.assignIn(product, fields);
    //     if (files.photo) {
    //         if (files.photo.size > 100000) {
    //             res.status(400).json({
    //                 error: " ban nen upload anh < 1mb"
    //             })
    //         }
    //         product.photo.data = fs.readFileSync(files.photo.path)
    //         product.photo.contentType = files.photo.path;
    //     }
    let product = req.product;
    product = _.assignIn(product, req.body);
    product.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: " khong sua duoc san pham"
            })
        }
        res.json(data)
    })

    // })

}

export const photo = (req, res, next) => {
    if (req.product.photo.data) {
        res.set("Content-Type", req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }
    next();
}



// export const listRelated = (req, res) => {
//     // let limit = req.query.limit ? req.query.limit : 5;

//     Product.find({
//         _id: { $ne: req.product },
//         category: req.product.category
//     }) // $ne: not include
//         // .limit(limit)
//         .populate('category', '_id name',)
//         .exec((err, products) => {
//             if (err) {
//                 res.status(400).json({
//                     error: "Products not found"
//                 })
//             }
//             res.json(products)
//         })
// }

// export const listCategories = (req, res) => {
//     // console.log(req.category)
//     Product.find({ "category": "604f2fd31c881aa9b4cc08e0" }, (err, products) => {
//         if (err) {
//             res.status(400).json({
//                 error: "Products not found"
//             })
//         }
//         products.photo = undefined;
//         res.json(products);
//     })


// }
// /**
//  * Hiển thị danh sách sản phẩm khi tìm kiếm
//  * Được áp dụng khi tìm kiếm ở react hoặc js project
//  * Hiển thị các danh mục trong checkbox và khoảng giá trong radio buttons
//  * user click vào checkbox và radio buttons
//  * sẽ thiết kế api và hiển thị danh sách sản phẩm mà người dùng tìm kiếm
//  */
// export const listBySearch = () => {
//     let order = req.query.order ? req.query.order : 'asc';
//     let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
//     let limit = req.query.limit ? +req.query.limit : 6;
//     let skip = parseInt(req.body.skip);
//     let findArgs = {}


//     for (let key in req.body.filters) {
//         if (req.body.filters[key].length > 0) {
//             if (key === "price") {
//                 // gte - greater than price [0 - 10]
//                 // lte - nhỏ hơn 
//                 findArgs[key] = {
//                     $gte: req.body.filters[key][0],
//                     $lte: req.body.filters[key][1],
//                 };
//             } else {
//                 findArgs[key] = req.body.filters[key];
//             }
//         }
//     }
//     Product.find(findArgs)
//         .select("-photo")
//         .populate("category")
//         .sort([[sortBy, order]])
//         .skip(skip)
//         .limit(limit)
//         .exec((err, data) => {
//             if (err) {
//                 res.status(400).json({
//                     error: "Products not found"
//                 })
//             }
//             res.json({
//                 size: data.length,
//                 data
//             })
//         });
// }

// // router.get("/product/photo/:productId", photo)
// export const photo = (req, res, next) => {
//     if (req.product.photo.data) {
//         res.set("Content-Type", req.product.photo.contentType);
//         return res.send(req.product.photo.data);
//     }
//     next();
// }