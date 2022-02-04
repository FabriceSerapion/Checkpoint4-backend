module.exports = async (db) => {
    const Platform = db.platform;
    await Platform.create({
      platform: "Netflix",
    });
  
    await Platform.create({
      platform: "Amazon Prime",
    });
  };
  