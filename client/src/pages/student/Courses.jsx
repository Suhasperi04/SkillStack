import { useGetAllCoursesQuery } from "@/features/api/courseApi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Clock, Users, Star } from "lucide-react";

const Courses = () => {
  const { data: courses, isLoading, error } = useGetAllCoursesQuery();
  const { isGuest } = useSelector((store) => store.auth);

  // Demo courses for guest users
  const demoCourses = [
    {
      _id: "demo-1",
      title: "React Fundamentals",
      description: "Learn the basics of React.js including components, state, and props",
      price: 49.99,
      instructor: "John Doe",
      duration: "8 hours",
      students: 1250,
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "Web Development"
    },
    {
      _id: "demo-2", 
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js and Express",
      price: 79.99,
      instructor: "Jane Smith",
      duration: "12 hours",
      students: 890,
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      category: "Backend Development"
    },
    {
      _id: "demo-3",
      title: "UI/UX Design Principles",
      description: "Master the fundamentals of user interface and user experience design",
      price: 59.99,
      instructor: "Mike Johnson",
      duration: "10 hours", 
      students: 2100,
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      category: "Design"
    }
  ];

  const displayCourses = isGuest ? demoCourses : (courses || []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading courses...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">Error loading courses</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Available Courses</h2>
        <p className="text-gray-600">
          {isGuest 
            ? "Demo courses for interviewers - Explore our sample content below"
            : "Discover amazing courses to enhance your skills"
          }
        </p>
        {isGuest && (
          <Badge variant="outline" className="mt-2">
            Demo Mode - Sample Content
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayCourses.map((course) => (
          <Card key={course._id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img
                src={course.thumbnail || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">{course.category}</Badge>
                <span className="font-bold text-lg">${course.price}</span>
              </div>
              <CardTitle className="text-xl">{course.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {course.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students} students
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {course.rating}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">By {course.instructor}</span>
                <Button asChild>
                  <Link to={`/course-detail/${course._id}`}>
                    {isGuest ? "View Demo" : "View Course"}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
