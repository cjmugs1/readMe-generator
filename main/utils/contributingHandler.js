const setStdrdContributing = (contributing) => {
    if (contributing === "") {
        contributing = "[here](../assets/stdrdContribution.md)"
    }
    return contributing;
}

exports.setContributing = setStdrdContributing;