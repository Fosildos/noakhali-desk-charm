import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground">
    <div className="container flex items-center justify-between py-1.5 text-xs">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +880-321-XXXXXXX</span>
        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> info@divnoakhali.gov.bd</span>
      </div>
      <div className="hidden sm:flex items-center gap-1">
        <Clock className="w-3 h-3" />
        <span>Sun–Thu: 9:00 AM – 5:00 PM</span>
      </div>
    </div>
  </div>
);

export default TopBar;
