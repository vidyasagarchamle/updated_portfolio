import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const CaseStudies = () => {
  const studies = [
    {
      title: 'Case Study 1',
      description: 'Description of Case Study 1',
      pdfPath: '/path/to/case_study_1.pdf',
      color: 'blue'
    },
    {
      title: 'Case Study 2',
      description: 'Description of Case Study 2',
      pdfPath: '/path/to/case_study_2.pdf',
      color: 'green'
    },
    {
      title: 'Case Study 3',
      description: 'Description of Case Study 3',
      pdfPath: '/path/to/case_study_3.pdf',
      color: 'red'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {studies.map((study) => (
        <Link 
          key={study.title}
          href={study.pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            console.log('Attempting to open PDF:', study.pdfPath);
            // Prevent default behavior
            e.preventDefault();
            // Open PDF in new tab
            window.open(study.pdfPath, '_blank');
          }}
          className={cn(
            "h-full w-full relative flex flex-col justify-between bg-gradient-to-b rounded-3xl p-6 border overflow-hidden transition-all duration-300 group",
            colorVariants[study.color],
            randomHeight,
            "hover:shadow-lg hover:-translate-y-0.5"
          )}
        >
          {/* Link content */}
        </Link>
      ))}
    </div>
  );
};

export default CaseStudies; 