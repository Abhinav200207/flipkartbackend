class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                name: {
                    $regex: this.queryStr.keyword,
                    $options: "i",
                },
            }
            : {};

        this.query = this.query.find({ ...keyword });
        return this;
    }

    // Sort by price
    sortItems() {
        const keyword = this.queryStr.sortby
            ? {
                price: this.queryStr.sortby,
            }
            : {};

        this.query = this.query.find({}).sort({ ...keyword });
        return this;
    }

    // Sort by Populararity
    sortItemsPopularity() {
        const keyword = this.queryStr.popular
            ? {
                rating: "desc",
            }
            : {};

        this.query = this.query.find({}).sort({ ...keyword });
        return this;
    }

    // Filter
    filter() {
        const queryCopy = { ...this.queryStr };

        delete queryCopy["keyword"];

        // Filter For Price and Rating

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }
}

module.exports = ApiFeatures;