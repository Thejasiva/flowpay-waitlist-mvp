from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import WaitlistUser
from .serializers import WaitlistUserSerializer
from django.core.mail import EmailMultiAlternatives
from django.conf import settings

@api_view(['POST'])
def add_to_waitlist(request):
    serializer = WaitlistUserSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()

        position = WaitlistUser.objects.count()

        subject = "🎉 Welcome to the FlowPay Waitlist"
        from_email = settings.EMAIL_HOST_USER
        to_email = [user.email]

        text_content = "You're on the FlowPay waitlist!"

        html_content = f"""
        <div style="font-family: Arial, sans-serif; background-color: #0b0f1a; padding: 40px; color: white;">
            <h1 style="color:#6366f1;">FlowPay 🚀</h1>
            <h2>You're officially on the waitlist!</h2>
            <p style="color:#cbd5f5;">
                Thanks for joining early. You're currently <b>#{position}</b> in line for early access.
            </p>
            <div style="margin:30px 0;">
                <a href="#" style="
                    background:#6366f1;
                    padding:12px 24px;
                    border-radius:8px;
                    color:white;
                    text-decoration:none;
                    font-weight:bold;">
                    Stay Tuned for Launch
                </a>
            </div>
            <p style="color:#9ca3af; font-size:14px;">
                You’re receiving this because you signed up for FlowPay early access.
            </p>
        </div>
        """

        email = EmailMultiAlternatives(subject, text_content, from_email, to_email)
        email.attach_alternative(html_content, "text/html")
        email.send()

        return Response(
            {
                "message": "Successfully joined the waitlist!",
                "position": position
            },
            status=status.HTTP_201_CREATED
        )