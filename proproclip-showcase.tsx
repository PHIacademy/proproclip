import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Replace these image paths with your actual logo files
const logoVariants = {
  'red': '/path/to/red-logo.svg',      // Replace with actual red logo path
  'gray': '/path/to/gray-logo.svg',    // Replace with actual gray logo path
  'darkred': '/path/to/darkred-logo.svg', // Replace with actual dark red logo path
  'darkgreen': '/path/to/darkgreen-logo.svg' // Replace with actual dark green logo path
};

const variantNames = {
  'red': 'Original Red',
  'gray': 'Neutral Gray',
  'darkred': 'Dark Red',
  'darkgreen': 'Dark Green'
};

const MockupCard = ({ children, title }) => (
  <Card className="w-full mb-4">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

const LogoShowcase = () => {
  const [selectedVariant, setSelectedVariant] = useState('red');

  return (
    <div className="w-full max-w-4xl p-4">
      <Tabs defaultValue="variations">
        <TabsList className="mb-4">
          <TabsTrigger value="variations">Logo Variations</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="variations">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {Object.entries(logoVariants).map(([key, path]) => (
              <div
                key={key}
                className={`p-4 border rounded-lg cursor-pointer ${
                  selectedVariant === key ? 'border-blue-500' : 'border-gray-200'
                }`}
                onClick={() => setSelectedVariant(key)}
              >
                <div className="aspect-[4/1] relative bg-white">
                  <img 
                    src={path}
                    alt={`${variantNames[key]} Logo Variant`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <p className="text-center mt-2 text-sm text-gray-600">
                  {variantNames[key]}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications">
          <div className="space-y-6">
            <MockupCard title="Website Header">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="h-16 flex items-center justify-between px-4">
                  <div className="w-40 relative">
                    <img 
                      src={logoVariants[selectedVariant]}
                      alt="ProProClip Logo"
                      className="h-full object-contain"
                    />
                  </div>
                  <div className="flex space-x-6 text-gray-600">
                    <span>Home</span>
                    <span>Services</span>
                    <span>Portfolio</span>
                    <span>Contact</span>
                  </div>
                </div>
              </div>
            </MockupCard>

            <MockupCard title="Social Media Profile">
              <div className="bg-white border rounded-lg overflow-hidden">
                <div className="h-32 bg-gray-200"/>
                <div className="p-4 flex items-start relative">
                  <div className="absolute -top-12 left-4 w-24 h-24 bg-white rounded-full p-2 border-4 border-white">
                    <img 
                      src={logoVariants[selectedVariant]}
                      alt="ProProClip Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="ml-32 pt-2">
                    <h3 className="font-bold text-xl">ProProClip</h3>
                    <p className="text-gray-600">Professional Video Editing Services</p>
                  </div>
                </div>
              </div>
            </MockupCard>

            <MockupCard title="Mobile App Icon">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-2xl shadow-lg overflow-hidden bg-white p-2">
                  <img 
                    src={logoVariants[selectedVariant]}
                    alt="ProProClip Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </MockupCard>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LogoShowcase;
