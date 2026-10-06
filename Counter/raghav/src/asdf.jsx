db.student.updateMany({
  $or: [
    {"city": "jaipur"},
    {"city": "bhilwara"},
  ]
},
  {
    $set: {"age": 100}
  }
)