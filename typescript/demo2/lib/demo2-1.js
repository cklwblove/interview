"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class Post {
}
tslib_1.__decorate([
    (0, class_validator_1.Length)(10, 20),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.Contains)('hello'),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "text", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(10),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "rating", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsFQDN)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "site", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], Post.prototype, "createDate", void 0);
let post = new Post();
post.title = 'Hello'; // should not pass
post.text = 'this is a great post about hell world'; // should not pass
post.rating = 11; // should not pass
post.email = 'google.com'; // should not pass
post.site = 'googlecom'; // should not pass
(0, class_validator_1.validate)(post).then(errors => {
    // errors is an array of validation errors
    if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
    }
    else {
        console.log('validation succeed');
    }
});
const handler = () => { };
exports.handler = handler;
