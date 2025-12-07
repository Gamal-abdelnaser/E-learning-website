import { Button } from "@/components/ui/button";

const categories = ["All", "Design", "Development", "Marketing", "Business"];

interface CourseFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function CourseFilters({ activeFilter, onFilterChange }: CourseFiltersProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "filter-active" : "filter"}
          size="sm"
          onClick={() => onFilterChange(category)}
          className="whitespace-nowrap"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
