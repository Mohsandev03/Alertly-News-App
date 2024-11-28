import newsCategoryList from "@/constants/Categories";
import { useCallback, useState } from "react";

const UsNewCategories = () => {
  const [newCategories, setNewCategories] = useState(newsCategoryList);

  const toggleNewCategory = useCallback((id: number) => {
    setNewCategories((prevNewCategories) => {
      return prevNewCategories.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            selected: !item.selected, // Fixing variable and property names
          };
        }
        return item; // Ensure other items are returned unchanged
      });
    });
  }, []);
return{
    newCategories,
    toggleNewCategory
}
}