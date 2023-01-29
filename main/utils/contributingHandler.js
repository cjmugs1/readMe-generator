const setStdrdContributing = (contributing) => {
    if (contributing === "Standardized contribution guideline") {
        contributing = "[here](./assets/stdrdContribution.md)"
    }
    return contributing;
}

exports.setContributing = setStdrdContributing;