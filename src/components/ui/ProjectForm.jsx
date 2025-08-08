import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ProjectForm() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">نموذج دراسة مشروع تنموي</h1>

      <Card>
        <CardContent className="space-y-4 p-4">
          <h2 className="text-xl font-semibold">معلومات المشروع</h2>
          <Input placeholder="اسم المشروع" className="w-full" />
          <Input placeholder="اسم الجهة المنفذة" className="w-full" />
          <Input placeholder="اسم مدير المشروع" className="w-full" />
          <Input placeholder="البريد الإلكتروني" className="w-full" />
          <Input placeholder="رقم التواصل" className="w-full" />

          <h2 className="text-xl font-semibold pt-4">وصف المشروع العام</h2>
          <Textarea placeholder="نبذة عن المشروع وأهدافه العامة" className="w-full" />

          <h2 className="text-xl font-semibold pt-4">الإطار المنطقي للمشروع</h2>
          <Textarea placeholder="الهدف الاستراتيجي" className="w-full" />
          <Textarea placeholder="الأهداف التفصيلية (محددة، قابلة للقياس، مرتبطة بزمن)" className="w-full" />

          <h2 className="text-xl font-semibold pt-4">مبررات المشروع</h2>
          <Textarea placeholder="اذكر أسباب اختيار هذا المشروع (حاجة مجتمعية، فجوة خدمية، إلخ)" className="w-full" />

          <h2 className="text-xl font-semibold pt-4">مخرجات المشروع</h2>
          <Textarea placeholder="ما الذي ستحققه من أنشطة ونتائج قابلة للقياس؟" className="w-full" />

          <h2 className="text-xl font-semibold pt-4">مؤشرات الأداء</h2>
          <Textarea placeholder="مثل عدد المستفيدين، نسبة الإنجاز، عدد الشراكات، رضا المستفيدين، إلخ" className="w-full" />

          <h2 className="text-xl font-semibold pt-4">إدارة المخاطر</h2>
          <Textarea placeholder="حدد أهم المخاطر المحتملة وكيفية التعامل معها" className="w-full" />

          <h2 className="text-xl font-semibold pt-4">مراحل التنفيذ</h2>
          <Textarea placeholder="1. التحضير والتخطيط\n2. بدء الأنشطة\n3. المتابعة والتقويم\n4. الإغلاق والتوثيق" className="w-full" />

          <h2 className="text-xl font-semibold pt-4">الخطة الزمنية</h2>
          <Textarea placeholder="توزيع الأنشطة على أشهر السنة حسب المدة" className="w-full" />

          <h2 className="text-xl font-semibold pt-4">الموازنة التقديرية</h2>
          <Textarea placeholder="اكتب تفاصيل الاحتياجات، العدد، وتكلفة الوحدة" className="w-full" />

          <Button className="w-full mt-6">إرسال النموذج</Button>
        </CardContent>
      </Card>
    </div>
  );
}
