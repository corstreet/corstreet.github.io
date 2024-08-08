  // helper function to grab all the skills from the workdata objects and remove duplicates
  export const getSkillsFromData = (data) => {
    const allSkills = data.map((workItem, index) => {
      return Object.values(workItem.tags)
    })
    const flattenedArray = [].concat.apply([], allSkills);
    const uniqueArray = [...new Set(flattenedArray)]
    return uniqueArray;
  }