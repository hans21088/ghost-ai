'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X, Plus } from 'lucide-react';

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-40 h-screen w-80 border-r border-border-default bg-bg-surface transition-transform duration-200 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ marginTop: 0 }}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-border-default px-4">
          <h2 className="text-lg font-semibold text-text-primary">Projects</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="!px-2 !py-2"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex flex-col h-full overflow-hidden">
          <Tabs defaultValue="my-projects" className="flex-1 flex flex-col overflow-hidden px-4 pt-4">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto">
              <TabsContent value="my-projects" className="mt-0">
                {/* Empty placeholder state */}
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <p className="text-text-muted text-sm">No projects yet</p>
                  <p className="text-text-faint text-xs mt-1">Create a new project to get started</p>
                </div>
              </TabsContent>

              <TabsContent value="shared" className="mt-0">
                {/* Empty placeholder state */}
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <p className="text-text-muted text-sm">No shared projects</p>
                  <p className="text-text-faint text-xs mt-1">Shared projects will appear here</p>
                </div>
              </TabsContent>
            </div>
          </Tabs>

          {/* New Project button */}
          <div className="border-t border-border-default p-4">
            <Button className="w-full" size="lg">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
