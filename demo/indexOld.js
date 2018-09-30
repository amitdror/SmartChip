
const mongoose = require('mongoose');

// Create & Connect to DB... also return a promise ==> then + catch.
//TODO: read the connection string form file!
mongoose.connect('mongodb://localhost/smartchip', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Schema defines the shape of the documents in our MongoDB database.
const chipSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 255,
        required: true
    },
    admin: { type: String, required: true },
    authorizedUsers: [String],
    // authorizedUsers: {
    //     type: Array,
    //     validate: {
    //         isAsync: true,
    //         validator: function (v, callback) {
    //             setTimeout(() => {
    //                 // Do some async work
    //                 const result = v && v.length > 0;
    //                 callback(result);
    //             }, 4000);

    //         },
    //         message: 'A chip sould have at least one authroized user.'
    //     }
    // },
    action: { type: String, required: true },
    options: [String],
    isActivated: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    timeout: {
        type: Number,
        required: function () { return this.isActivated; },
        min: 10000,
        max: 100000000
    },
    category: {
        type: String,
        enum: ['web', 'mobile', 'desktop']
    }
});

// Compile it into a 'moudle' (Class). 
//first param = collaction name (table name)
//second param = schema that define the shape of documents in that collction.
const Chip = mongoose.model('Chip', chipSchema);

// Save to DB
// result == will hold the created object + genereted _id
async function createChip(chip) {
    try {
        const result = await chip.save();
        console.log(result);
    }
    catch (ex) {
       // console.log(ex.message);
        for(field in ex.errors){
            console.log(ex.error[field].message);
        }
    }
}

// Query DB
async function getChips() {
    const chips = await Chip.find()
        .limit(10)
        .sort({ date: 1 })
        .select({ action: 1, options: 1 });
}

// Find chip by _id
async function getChipByChipId(userId, chipId) {
    const chip = await Chip.findById(chipId)
        .select({ name: 1, action: 1, options: 1 });
}

async function getChipsByQuery(userId) {
    const chip = await Chip
        .find()``
        .or([{ admin: userId }, { isActivated: true }])

}

async function getChipsByUserId(userId) {
    const chips = await Chip.find({ admin: { $eq: userId } })
        .limit(20)
        .sort({ date: 1 })
        .select({ name: 1, action: 1, options: 1 });
}

// Update Chip

// Approach: Quary first
// findById()
// Modify its properies
// save()
async function updateChipQueryFirst(id) {
    const chip = await Chip.findById(id);
    if (!chip) return;
    //update values
    chip.isActivated = false;
    chip.admin = "123456";
    //save to db
    const result = await chip.save();
    console.log(result);
}

// Approach: Update first
// Update directly
// Optionally: get the updated document
async function updateChipUpdateFirst(id) {
    const result = await Chip.update({ _id: id }, {
        $set: {
            admin: "654321",
            isActivated: false
        }
    });
    // const chip = await Chip.findByIdAndUpdate(id, {
    //    $set: {
    //        admin: "654321",
    //        isActivated: false
    //    } 
    // }, {new: true});
    console.log(result);
}

// Remove chips
async function removeChip(id) {
    // const result = await Chip.deleteOne({_id: id});
    // const result = await Chip.deleteMany({_id: id});
    const chip = await Chip.findByIdAndRemove(id); //null if no chip
    console.log(chip);
}

// Create chips
const chip = new Chip({
    name: 'Call Friend',
    admin: '007',
    //action: 'phone.CallUser();',
    options: ['israel', '+972'],
    category: 'mobile',
    isActivated: false
});

//deleteAllChip();
//createChip(chip);
//updateChipQueryFirst('5bae4c521747b12a847f2d8f');
//updateChipUpdateFirst('5bae4c521747b12a847f2d8f')

//_id 5bae4c521747b12a847f2d8f


