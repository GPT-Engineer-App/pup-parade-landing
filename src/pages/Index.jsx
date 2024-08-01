import { useState } from 'react';
import { PawPrint, Heart, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [showMore, setShowMore] = useState(false);

  const dogBreeds = [
    { name: 'Labrador Retriever', description: 'Friendly and outgoing' },
    { name: 'German Shepherd', description: 'Intelligent and versatile' },
    { name: 'Golden Retriever', description: 'Gentle and affectionate' },
    { name: 'Bulldog', description: 'Calm and courageous' },
    { name: 'Beagle', description: 'Merry and curious' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to Doggy Paradise</h1>
        <p className="text-xl text-blue-600">Discover the joy of canine companionship</p>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Why Dogs Make Great Pets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <PawPrint />, title: 'Loyal Companions', description: 'Dogs offer unwavering friendship and love.' },
              { icon: <Heart />, title: 'Health Benefits', description: 'Owning a dog can reduce stress and increase physical activity.' },
              { icon: <Info />, title: 'Social Catalysts', description: 'Dogs help you meet new people and make friends.' },
            ].map((item, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Popular Dog Breeds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogBreeds.slice(0, showMore ? dogBreeds.length : 3).map((breed, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <CardTitle>{breed.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{breed.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          {!showMore && (
            <div className="text-center mt-6">
              <Button onClick={() => setShowMore(true)} variant="outline">
                Show More Breeds
              </Button>
            </div>
          )}
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Ready to Find Your Furry Friend?</h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Adopt a Dog Today
          </Button>
        </section>
      </main>

      <footer className="mt-12 text-center text-blue-600">
        <p>&copy; 2024 Doggy Paradise. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
